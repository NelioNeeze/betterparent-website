export type CourseType = {
    attributes: {
      title: string;
      shortDescription: string;
      detailedText: string,
      coach: {
        data: {
          attributes: {
            name: string
          }
        }
      }
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
    id : string,
}; 