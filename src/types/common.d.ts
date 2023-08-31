declare module '*.image.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  const src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default src;
}

declare module '*.icon.svg' {
  import { IconComponent } from '@consta/icons/Icon';

  const src: IconComponent;
  export default src;
}

declare module '*.colorIcon.svg' {
  import { IconComponent } from '@consta/icons/Icon';

  const src: IconComponent;
  export default src;
}

declare module '*.jpeg' {
  const content: string;

  export default content;
}

declare module '*.jpg' {
  const content: string;

  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
