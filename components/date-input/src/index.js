import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { withWhiteSpace } from '@govuk-react/hoc';

import multiInputInput from 'multi-input-input';

import Input from './input';

const StyledContainer = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  ({ errorText }) => ({
    borderLeft: errorText ? `4px solid ${ERROR_COLOUR}` : undefined,
    marginRight: errorText ? SPACING.SCALE_3 : undefined,
    paddingLeft: errorText ? SPACING.SCALE_2 : undefined,
  }),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <DateInput>What is your date of birth?</DateInput>
 * ```
 *
 * Date with hint text
 * ```jsx
 * <DateInput hintText="For example, 31 03 1980">
 *   What is your date of birth?
 * </DateInput>
 * ```
 *
 * Date with hint text & error
 * ```jsx
 * <DateInput
 *   hintText="For example, 31 03 1980"
 *   errorText="Error message goes here"
 * >
 *   What is your date of birth?
 * </DateInput>
 * ```
 *
 * With custom input name props
 * ```jsx
 * <DateInput inputNames={{ day: 'dayInputName' }} hintText="For example, 31 03 1980">
 *   What is your date of birth?
 * </DateInput>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-input
 *
 */
const DateInput = ({
  children,
  errorText,
  hintText,
  inputNames,
  defaultValues,
  input,
  ...props
}) => (
  <StyledContainer {...props} errorText={errorText}>
    <LabelText errorText={errorText}>{children}</LabelText>
    {hintText ? <HintText>{hintText}</HintText> : <span />}
    {errorText ? (
      <ErrorText errorText={errorText}>{errorText}</ErrorText>
    ) : (
      <span />
      )}
    <Input
      names={inputNames}
      // TODO: defaultValues should be a prop on input
      defaultValues={defaultValues}
      // TODO: allow each individual input (day, month, year) to have a separate bool for error
      error={!!errorText}
      {...input}
    />
  </StyledContainer>
);

DateInput.defaultProps = {
  hintText: undefined,
  errorText: undefined,
  inputNames: {
    day: undefined,
    month: undefined,
    year: undefined,
  },
  defaultValues: {
    defaultDay: undefined,
    defaultMonth: undefined,
    defaultYear: undefined,
  },
  refs: () => null,
  input: {
    onChange: () => null,
    onBlur: () => null,
    onFocus: () => null,
    value: undefined,
  },
};

DateInput.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Optional hint text
   */
  hintText: PropTypes.string,
  /**
   * Error text
   */
  errorText: PropTypes.string,
  /**
   * Input name attributes
   */
  inputNames: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  defaultValues: {
    defaultDay: PropTypes.any,
    defaultMonth: PropTypes.any,
    defaultYear: PropTypes.any,
  },
  refs: PropTypes.func,
  input: PropTypes.shape({
    /**
     * Called when the day, month or year changes
     */
    onChange: PropTypes.func,
    /**
     * Called when the day, month or year fields are blurred
     * (does not get called when moving between inputs in the same datefield)
     */
    onBlur: PropTypes.func,
    /**
     * Called when the day, month or year fields are focussed
     * (does not get called when moving between inputs in the same datefield)
     */
    onFocus: PropTypes.func,
    /**
     * When the form field is controlled, this sets the value of the day, month and year inputs
     */
    value: PropTypes.shape({
      day: PropTypes.number,
      month: PropTypes.number,
      year: PropTypes.number,
    }),
  }),
};

export default withWhiteSpace({ marginBottom: 6 })(multiInputInput(DateInput));
