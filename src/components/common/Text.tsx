import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function Title({ className, children, ...rest }: TitleProps) {
  return (
    <h2
      className={classNames(className, 'text-h3 sm:text-h2 text-gray-600 py-4')}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function BodyText({ className, ...rest }: TitleProps) {
  return (
    <p
      className={classNames(className, 'text-base font-normal text-gray-700')}
      {...rest}
    />
  );
}
