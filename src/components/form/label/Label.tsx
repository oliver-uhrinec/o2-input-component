import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultTheme, styled } from 'styled-components';

export interface LabelProps {
  invalidLabelId: string;
  htmlFor: string;
  required?: boolean;
  error: string;
  warning: string;
}

interface StyledLabelProps {
  $hasError: boolean;
  $hasWarning: boolean;
}

interface StyledInvalidMessageProps {
  $hasError: boolean;
  $hasWarning: boolean;
}

const getColor = ({
  $hasError,
  $hasWarning,
  theme,
}: {
  $hasError: boolean;
  $hasWarning: boolean;
  theme: DefaultTheme;
}) => {
  if ($hasError) return theme.color.content['on-neutral'].danger;
  if ($hasWarning) return theme.color.content['on-neutral'].warning;
  return theme.color.content['on-neutral']['xx-high'];
};

const StyledLabel = styled.label<StyledLabelProps>(
  ({ $hasError, $hasWarning, theme }) => {
    const color = getColor({ $hasError, $hasWarning, theme });

    return {
      display: 'inline-block',
      fontSize: theme.font.label.m.size,
      fontWeight: theme.font.label.m.weight,
      lineHeight: theme.font.label.m.lineHeight,
      letterSpacing: theme.font.label.s.letterSpacing,
      color,
    };
  }
);

const StyledOptionalLabel = styled.span(({ theme }) => ({
  fontSize: theme.font.label.s.size,
  fontWeight: theme.font.label.s.weight,
  lineHeight: theme.font.label.s.lineHeight,
  letterSpacing: theme.font.label.s.letterSpacing,
  color: theme.color.content['on-neutral'].low,
}));

const StyledInvalidMessage = styled.span<StyledInvalidMessageProps>(
  ({ $hasError, $hasWarning, theme }) => {
    const color = getColor({ $hasError, $hasWarning, theme });

    return {
      fontSize: theme.font.label.s.size,
      fontWeight: theme.font.label.s.weight,
      lineHeight: theme.font.label.s.lineHeight,
      letterSpacing: theme.font.label.s.letterSpacing,
      color,
    };
  }
);

const StyledLabelContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.dimensions.spacing.xs,
  alignItems: 'center',
}));

const Label: FC<PropsWithChildren<LabelProps>> = ({
  invalidLabelId,
  htmlFor,
  error,
  warning,
  required = true,
  children,
}) => {
  const { t } = useTranslation();

  const hasError = error !== undefined && error !== null;
  const hasWarning = warning !== undefined && warning !== null;
  const isInvalidMessageVisible =
    typeof error === 'string' || typeof warning === 'string';

  return (
    <>
      <StyledLabelContainer>
        <StyledLabel
          $hasError={hasError}
          $hasWarning={hasWarning}
          htmlFor={htmlFor}
        >
          {children}
        </StyledLabel>
        {!required && (
          <StyledOptionalLabel>{t('input.optional')}</StyledOptionalLabel>
        )}
      </StyledLabelContainer>

      {isInvalidMessageVisible && (
        <StyledInvalidMessage
          id={invalidLabelId}
          $hasError={hasError}
          $hasWarning={hasWarning}
        >
          {hasError ? error : warning}
        </StyledInvalidMessage>
      )}
    </>
  );
};

export default Label;
