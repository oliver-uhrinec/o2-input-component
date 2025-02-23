import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import { DefaultTheme, styled } from 'styled-components';
import Label from '@/components/form/label/Label';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  value: string;
  error: string;
  warning: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface StyledInputProps {
  $hasError: boolean;
  $hasWarning: boolean;
}

const getBorderColor = ({
  $hasError,
  $hasWarning,
  theme,
}: {
  $hasError: boolean;
  $hasWarning: boolean;
  theme: DefaultTheme;
}) => {
  if ($hasError) return theme.color.surface.danger;
  if ($hasWarning) return theme.color.surface.warning;
  return theme.color.surface['x-high'];
};

const StyledInput = styled.input<StyledInputProps>(
  ({ $hasError, $hasWarning, theme }) => {
    const borderColor = getBorderColor({ $hasError, $hasWarning, theme });

    return {
      boxSizing: theme.dimensions.input.boxSizing,

      paddingRight:
        theme.dimensions.input.padding.right -
        theme.dimensions.input.border.width,
      paddingLeft:
        theme.dimensions.input.padding.left -
        theme.dimensions.input.border.width,

      width: theme.dimensions.input.width,
      height: theme.dimensions.input.height,

      borderRadius: theme.dimensions.radius.input,
      borderWidth: theme.dimensions.input.border.width,
      borderColor,

      color: theme.color.content['on-neutral']['xx-high'],
      caretColor: theme.color.surface.brand,

      fontSize: theme.font.body.m.size,
      lineHeight: theme.font.body.m.lineHeight,
      letterSpacing: theme.font.body.m.letterSpacing,

      '&::placeholder': {
        color: theme.color.content['on-neutral'].low,
      },

      '&:hover': {
        borderColor: theme.color.state.default.hover,
      },

      '&:focus, &:focus-visible': {
        outline: 'none',
        borderWidth: theme.dimensions.input.focus.borderWidth,
        borderColor,

        paddingRight:
          theme.dimensions.input.padding.right -
          theme.dimensions.input.focus.borderWidth,
        paddingLeft:
          theme.dimensions.input.padding.left -
          theme.dimensions.input.focus.borderWidth,
      },

      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
    };
  }
);

const StyledDescription = styled.div(({ theme }) => ({
  fontSize: theme.font.label.s.size,
  fontWeight: theme.font.label.s.weight,
  lineHeight: theme.font.label.s.lineHeight,
  letterSpacing: theme.font.label.s.letterSpacing,
  color: theme.color.content['on-neutral']['medium'],
}));

const StyledInputContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.dimensions.spacing.xs,
}));

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      description,
      required = true,
      error,
      warning,
      handleChange,
      ...rest
    },
    ref
  ) => {
    const hasError = typeof error === 'string' && error.trim() !== '';
    const hasWarning = typeof warning === 'string' && warning.trim() !== '';

    const invalidLabelId = `${id}-label`;
    const descriptionId = `${id}-description`;
    const inputDescribedBy = [
      hasError || hasWarning ? invalidLabelId : undefined,
      description && descriptionId,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <StyledInputContainer>
        <Label
          invalidLabelId={invalidLabelId}
          htmlFor={id}
          error={error}
          warning={warning}
          required={required}
        >
          {label}
        </Label>
        {description && (
          <StyledDescription id={descriptionId}>{description}</StyledDescription>
        )}
        <StyledInput
          ref={ref}
          id={id}
          onChange={handleChange}
          aria-required={required}
          aria-invalid={hasError}
          aria-errormessage={hasError ? error : undefined}
          aria-describedby={inputDescribedBy}
          $hasError={hasError}
          $hasWarning={hasWarning}
          {...rest}
        />
      </StyledInputContainer>
    );
  }
);

export default Input;
