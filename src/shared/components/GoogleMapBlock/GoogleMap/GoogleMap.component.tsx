import React, { useCallback } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { Markers } from './GoogleMap.Markers';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';

import marker from '../../../../assets/icons/pencil.svg';

interface IGoogleMapProps {
  selectedMarker?: (id: number) => void;
}

const GoogleMapComponent = ({ selectedMarker }: IGoogleMapProps) => {
  const resetMarker = useCallback(() => {
    selectedMarker!(0);
  }, []);

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 46.5792154, lng: 30.7951039 }}
      onClick={resetMarker}
    >
      <MarkerClusterer>
        {Markers.map(item => {
          const { lat, lng, id } = item;

          const getSelectedMarker = useCallback(() => {
            selectedMarker!(id);
          }, []);
          return (
            <Marker
              key={id}
              position={{ lat, lng }}
              icon={{ url: marker }}
              onClick={getSelectedMarker}
            />
          );
        })}
      </MarkerClusterer>
    </GoogleMap>
  );
};

GoogleMapComponent.defaultProps = {
  selectedMarker: () => void 0
};

export default withScriptjs(withGoogleMap(GoogleMapComponent));
