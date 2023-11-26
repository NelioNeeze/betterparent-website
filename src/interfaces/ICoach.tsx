export type CoachType = {
    attributes: {
      name: string;
      previewText: string;
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
    id: string;
}; 