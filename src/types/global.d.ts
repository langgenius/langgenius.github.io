declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  import React, { PropsWithoutRef, RefAttributes, SVGProps } from "react";
  const url: string;
  export const ReactComponent: React.ForwardRefExoticComponent<
    PropsWithoutRef<SVGProps<SVGAElement>> &
      RefAttributes<SVGAElement> & { title?: string; titledId?: string }
  >;
  export default url;
}
