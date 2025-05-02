
import * as React from 'react';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: string;
  size?: string;

}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className, 
      children,
      variant, 
      size,
      type = 'button', 
      ...props 
    },
    ref 
  ) => {


    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";


    const combinedClassName = `${baseStyles} ${className || ''}`.trim();

    return (
      <button
        type={type}
        className={combinedClassName} 
        ref={ref}
        {...props} 
      >
        {children} 
      </button>
    );
  }
);


Button.displayName = "Button";


export default Button;
