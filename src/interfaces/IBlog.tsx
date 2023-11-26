export type BlogType = {
    attributes: {
      title: string;
      summary: string;
      text: string;
      category: {
        data: {
            attributes: {
                name : string
            }
        }
      },
      coach: {
        data: {
            attributes: {
                name : string
            }
        }
      },
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