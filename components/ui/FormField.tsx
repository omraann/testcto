import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  error?: string;
  helper?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FormField = ({
  id,
  label,
  type = 'text',
  placeholder,
  error,
  helper,
  required = false,
  disabled = false,
  className = '',
  name,
  value,
  onChange,
  onBlur,
  ...props
}: FormFieldProps) => {
  const hasError = !!error;
  const baseInputClasses = `
    w-full h-11 px-4 bg-background border rounded-md text-foreground placeholder:text-secondary
    transition-all duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-accent
    disabled:opacity-50 disabled:cursor-not-allowed
    ${hasError 
      ? 'border-red-500 focus:outline-red-500 focus:border-red-500' 
      : 'border-border focus:border-accent'
    }
  `;

  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={`space-y-2 ${className}`}>
      <label 
        htmlFor={id} 
        className={`block text-sm font-medium ${
          hasError ? 'text-red-500' : 'text-foreground'
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      
      <Component
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={baseInputClasses}
        {...(type === 'textarea' ? { rows: 5 } : {})}
        {...props}
      />
      
      {(error || helper) && (
        <p className={`text-sm ${hasError ? 'text-red-500' : 'text-secondary'}`}>
          {error || helper}
        </p>
      )}
    </div>
  );
};