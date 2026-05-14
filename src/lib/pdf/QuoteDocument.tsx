import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import path from 'path';
import type { Submission } from '@/types/quote';
import { SERVICE_LABELS, SERVICE_FIELDS } from '@/data/quote-fields';

const styles = StyleSheet.create({
  page: { fontFamily: 'Helvetica', fontSize: 11, color: '#1C1C1C', padding: 48 },
  header: { marginBottom: 32 },
  logo: { width: 180, marginBottom: 8 },
  company: { fontSize: 18, fontFamily: 'Helvetica-Bold', color: '#4A7C2F' },
  companyDetail: { fontSize: 10, color: '#777777', marginTop: 2 },
  divider: { borderBottomWidth: 1, borderBottomColor: '#e5e5e3', marginVertical: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  label: { color: '#777777', width: 160 },
  value: { flex: 1 },
  sectionTitle: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: '#999999', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 },
  section: { marginBottom: 24 },
  amount: { fontSize: 28, fontFamily: 'Helvetica-Bold', color: '#4A7C2F', marginBottom: 4 },
  amountLabel: { fontSize: 10, color: '#777777' },
  footer: { position: 'absolute', bottom: 40, left: 48, right: 48, borderTopWidth: 1, borderTopColor: '#e5e5e3', paddingTop: 12 },
  footerText: { fontSize: 9, color: '#999999' },
  refChip: {
    backgroundColor: '#F0F5EC',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  refText: { fontSize: 10, color: '#4A7C2F', fontFamily: 'Helvetica-Bold' },
  amountWrapper: { marginVertical: 20, alignItems: 'flex-end' as const },
});

interface QuoteDocumentProps {
  submission: Submission;
  quoteRef: string;
  quoteAmount: number;
  quoteNotes: string;
  dateIssued: string;
}

export function QuoteDocument({
  submission,
  quoteRef,
  quoteAmount,
  quoteNotes,
  dateIssued,
}: QuoteDocumentProps) {
  const rawDetails = submission.job_details as unknown as Record<string, string | number>;
  const serviceName = SERVICE_LABELS[submission.service] ?? submission.service;
  const fields = SERVICE_FIELDS[submission.service] ?? [];

  const resolveLabel = (fieldKey: string, rawValue: string | number): string => {
    const field = fields.find((f) => f.key === fieldKey);
    if (!field) return String(rawValue);
    if (field.type === 'number' && field.unit) return `${rawValue} ${field.unit}`;
    if (field.options) {
      const opt = field.options.find((o) => o.value === String(rawValue));
      return opt ? opt.label : String(rawValue);
    }
    return String(rawValue);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image style={styles.logo} src={path.join(process.cwd(), 'public/images/logo.png')} />
          <Text style={styles.companyDetail}>135 Railway Parade, Thorneside QLD 4158</Text>
          <Text style={styles.companyDetail}>(07) 3207 3510  ·  riley@baysideslashing.com.au</Text>
          <Text style={styles.companyDetail}>ABN: 71 056 487 060</Text>
        </View>

        <View style={styles.divider} />

        {/* Quote reference */}
        <View style={styles.refChip}>
          <Text style={styles.refText}>{quoteRef}</Text>
        </View>

        <View style={[styles.row, { marginBottom: 24 }]}>
          <Text style={[styles.label, { color: '#1C1C1C' }]}>Date Issued</Text>
          <Text style={styles.value}>{dateIssued}</Text>
        </View>

        {/* Customer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prepared For</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{submission.contact_name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Property</Text>
            <Text style={styles.value}>{submission.property_address}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Approximate Size</Text>
            <Text style={styles.value}>{submission.property_size}</Text>
          </View>
        </View>

        {/* Service */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service: {serviceName}</Text>
          {fields.filter((f) => rawDetails[f.key] !== undefined).map((field) => (
            <View key={field.key} style={styles.row}>
              <Text style={styles.label}>{field.label}</Text>
              <Text style={styles.value}>{resolveLabel(field.key, rawDetails[field.key])}</Text>
            </View>
          ))}
        </View>

        {/* Amount */}
        <View style={styles.divider} />
        <View style={styles.amountWrapper}>
          <Text style={styles.amountLabel}>QUOTE TOTAL (INC. GST)</Text>
          <Text style={styles.amount}>
            ${quoteAmount.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Text>
        </View>

        {/* Scope of works */}
        {quoteNotes ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Scope of Works</Text>
            <Text style={{ lineHeight: 1.6 }}>{quoteNotes}</Text>
          </View>
        ) : null}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            This quote is valid for 30 days from the date of issue.  ·  ABN: 71 056 487 060
          </Text>
          <Text style={[styles.footerText, { marginTop: 2 }]}>
            Bayside Land Services  ·  (07) 3207 3510  ·  riley@baysideslashing.com.au
          </Text>
        </View>
      </Page>
    </Document>
  );
}
