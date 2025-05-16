import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function Title({ className, children, ...rest }: TitleProps) {
  return (
    <h2
      className={classNames(className, 'text-xl sm:text-4xl font-bold py-4')}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function BodyText({ className, ...rest }: TitleProps) {
  return (
    <p className={classNames(className, 'text-lg font-normal')} {...rest} />
  );
}
