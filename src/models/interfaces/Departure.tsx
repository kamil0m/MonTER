interface TrainDeparture {
    route: {
      id: string;
      name: string;
      is_frequence: string;
      direction_type: string;
      physical_modes: {
        id: string;
        name: string;
      }[];
      direction: {
        id: string;
        name: string;
        quality: number;
        stop_area: {
          id: string;
          name: string;
          codes: {
            type: string;
            value: string;
          }[];
          timezone: string;
          label: string;
          coord: {
            lon: string;
            lat: string;
          };
          links: any[];
        };
        embedded_type: string;
      };
      geojson: {
        type: string;
        coordinates: any[];
      };
      links: any[];
      line: {
        id: string;
        name: string;
        code: string;
        color: string;
        text_color: string;
        codes: any[];
        physical_modes: {
          id: string;
          name: string;
        }[];
        commercial_mode: {
          id: string;
          name: string;
        };
        network: {
          id: string;
          name: string;
          links: any[];
        };
        opening_time: string;
        closing_time: string;
        geojson: {
          type: string;
          coordinates: any[];
        };
        links: any[];
      };
    };
    stop_point: {
      id: string;
      name: string;
      label: string;
      coord: {
        lon: string;
        lat: string;
      };
      links: any[];
      commercial_modes: {
        id: string;
        name: string;
      }[];
      physical_modes: {
        id: string;
        name: string;
        co2_emission_rate: {
          value: number;
          unit: string;
        };
      }[];
      administrative_regions: {
        id: string;
        name: string;
        level: number;
        zip_code: string;
        label: string;
        insee: string;
        coord: {
          lon: string;
          lat: string;
        };
      }[];
      stop_area: {
        id: string;
        name: string;
        codes: {
          type: string;
          value: string;
        }[];
        timezone: string;
        label: string;
        coord: {
          lon: string;
          lat: string;
        };
        links: any[];
        administrative_regions: {
          id: string;
          name: string;
          level: number;
          zip_code: string;
          label: string;
          insee: string;
          coord: {
            lon: string;
            lat: string;
          };
        }[];
      };
      equipments: any[];
    };
    stop_date_time: {
      departure_date_time: string;
      base_departure_date_time: string;
      arrival_date_time: string;
      base_arrival_date_time: string;
      additional_informations: any[];
      links: any[];
      data_freshness: string;
    };
    display_informations: {
      commercial_mode: string;
      network: string;
      direction: string;
      label: string;
      color: string;
      code: string;
      headsign: string;
      name: string;
      links: any[];
      text_color: string;
      trip_short_name: string;
      description: string;
      physical_mode: string;
      equipments: any[];
    };
    links: {
      type: string;
      id: string;
    }[];
  }