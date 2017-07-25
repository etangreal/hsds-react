import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utilities/classNames';
import { noop } from '../../utilities/constants';

const propTypes = {
  autoFocus: PropTypes.bool,
  defaultHeight: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  resize: PropTypes.bool,
  resizeBoth: PropTypes.bool,
  seamless: PropTypes.bool,
  success: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  value: PropTypes.string,
  warning: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
const defaultProps = {
  autoFocus: false,
  defaultHeight: 28,
  disabled: false,
  error: false,
  id: '',
  name: '',
  onBlur: noop,
  onChange: noop,
  onEnter: noop,
  onFocus: noop,
  placeholder: '',
  readOnly: false,
  resize: true,
  resizeBoth: false,
  seamless: false,
  success: false,
  value: '',
  warning: false,
};

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: props.defaultHeight,
    };

    this.setValue = this.setValue.bind(this);
    this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.setFilledTextareaHeight();
  }

  setFilledTextareaHeight() {
    if (this.mounted) {
      const element = this.ghost;

      this.setState({
        height: element.clientHeight,
      });
    }
  }

  handleKeyUp(e) {
    if (e && e.keyCode === 13) {
      return;
    }
    this.setFilledTextareaHeight();
  }

  handleKeyDown(e) {
    this.handleEnter(e);
    this.setFilledTextareaHeight();
  }

  handleEnter(e) {
    if (!e || e.keyCode !== 13) {
      return;
    }
    e.preventDefault();

    this.props.onEnter(this.state.value);
    this.textarea.focus();
  }

  setValue(event) {
    const { value } = event.target;
    this.props.onChange(event);
    this.setState({ value });
  }

  getExpandableField() {
    const {
      autoFocus,
      disabled,
      id,
      name,
      onBlur,
      onFocus,
      placeholder,
      readOnly,
    } = this.props;
    const { height, value } = this.state;
    const handleKeyUp = this.handleKeyUp.bind(this);
    const handleKeyDown = this.handleKeyDown.bind(this);

    return (
      <textarea
        autoFocus={autoFocus}
        className="c-Textarea__field"
        defaultValue={this.props.value}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={textarea => (this.textarea = textarea)}
        onBlur={onBlur}
        onChange={this.setValue}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        style={{
          height,
        }}
        value={value}
      />
    );
  }

  getGhostField() {
    return (
      <div
        className="c-Textarea__ghost"
        ref={c => (this.ghost = c)}
        aria-hidden="true"
      >
        {this.state.value}
      </div>
    );
  }

  render() {
    const { disabled, readOnly, resize, resizeBoth, seamless } = this.props;

    const className = classNames(
      'c-Textarea',
      disabled && 'is-disabled',
      readOnly && 'is-readonly',
      resize && 'c-Textarea--resize',
      resizeBoth && 'c-Textarea--resizeBoth',
      seamless && 'c-Textarea--seamless'
    );

    return (
      <div className={className}>
        {this.getExpandableField()}
        {this.getGhostField()}
        <div className="c-Textarea__backdrop" />
      </div>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;