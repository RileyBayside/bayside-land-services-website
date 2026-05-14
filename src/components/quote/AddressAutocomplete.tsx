'use client';

import { useEffect, useRef } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';

interface AddressAutocompleteProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

export function AddressAutocomplete({ onChange, placeholder }: AddressAutocompleteProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
      v: 'weekly',
    });

    importLibrary('places').then(() => {
      if (!isMounted || !containerRef.current || containerRef.current.childElementCount > 0) return;

      const el = new google.maps.places.PlaceAutocompleteElement({
        includedRegionCodes: ['au'],
        includedPrimaryTypes: ['address'],
        placeholder: placeholder ?? null,
      });

      containerRef.current.appendChild(el);

      el.addEventListener('gmp-select', async (event: google.maps.places.PlacePredictionSelectEvent) => {
        const place = event.placePrediction.toPlace();
        await place.fetchFields({ fields: ['formattedAddress'] });
        if (place.formattedAddress) onChange(place.formattedAddress);
      });
    });

    return () => {
      isMounted = false;
    };
  }, [onChange, placeholder]);

  return <div ref={containerRef} data-address-autocomplete />;
}
