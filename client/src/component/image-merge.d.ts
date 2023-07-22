declare module 'image-merge' {
    function mergeImages(
      images: string[],
      options: {
        direction?: 'horizontal' | 'vertical';
        color?: string;
      },
      callback: (error: Error | null, image?: string) => void
    ): void;
  
    export = mergeImages;
  }