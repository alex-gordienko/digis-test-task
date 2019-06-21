import React from 'react';
import GoogleMapComponent from './GoogleMap';
import StyledMapBlock from './GoogleMapBlock.styled';

interface IGoogleMapBlockProps {
  selectedMarker?: (e: number) => void;
}

const GoogleMapBlock = ({ selectedMarker }: IGoogleMapBlockProps) => {
  return (
    <StyledMapBlock>
      <GoogleMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4un_JQsqJQTH7rDez7k9SJw7-zDyZ3YA&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%`, width: `inherit` }} />}
        containerElement={<div style={{ height: `100%`, width: `inherit` }} />}
        mapElement={<div style={{ height: `100%`, width: `inherit` }} />}
        selectedMarker={selectedMarker!}
      />
    </StyledMapBlock>
  );
};

export default GoogleMapBlock;
