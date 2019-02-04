import * as React from 'react';

export type LabelProps = {
  children?: React.ReactNode;
  htmlFor: string;
  className?: string;
};

export default function Label({
  className,
  htmlFor,
  children,
  ...rest
}: LabelProps) {
  return (
    <label className={className} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
}
