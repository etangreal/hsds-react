import styled from '../styled'
import baseStyles from '../../styles/resets/baseStyles.css.js'
import { getColor } from '../../styles/utilities/color'
import Button from '../Button'
import Text from '../Text'
import Heading from '../Heading'
import { DropdownUI, TriggerUI } from '../Dropdown/V2/Dropdown.css'
import { darken, lighten } from '../../utilities/color'

const config = {
  sidePadding: '18px',
  border: `1px solid ${getColor('grey.500')}`,
}

export const SideNavigationUI = styled('div')`
  ${baseStyles};
  background-color: ${getColor('grey.300')};
  border-right: ${config.border};
  height: 100%;
  width: 250px;
  padding-top: 16px;
  padding-bottom: 100px;
  overflow: hidden;

  &.is-collapsed {
    width: 59px;
  }
`

export const IconUI = styled('span')`
  color: ${getColor('grey.600')};
  margin-right: 10px;
`

export const CountUI = styled(Text)`
  margin-left: auto;
`

export const ButtonUI = styled(Button)`
  &.is-default {
    color: ${getColor('charcoal.400')};
    border-radius: 0;
    font-size: 14px;
    justify-content: left;
    text-decoration: none;
    width: 100%;
    padding: 0 ${config.sidePadding};

    &:focus {
      text-decoration: none;
      outline: ${getColor('charcoal.400')} auto 3px;
    }

    &:hover {
      text-decoration: none;
      background-color: ${getColor('grey.400')};
      color: ${getColor('charcoal.500')};

      ${IconUI} {
        color: ${getColor('charcoal.300')};
      }
    }

    &:disabled,
    &.is-disabled {
      color: ${getColor('charcoal.200')};
    }
  }
`

export const ButtonFooterUI = styled(Button)`
  &.is-default {
    border-top: ${config.border};
    border-bottom: ${config.border};
    color: ${getColor('charcoal.200')};
    background-color: ${lighten(getColor('grey.400'), 2)};
    display: inline-flex;
    width: 100%;
    border-radius: 0;

    &:hover {
      background-color: ${darken(getColor('grey.400'), 2)};
    }

    :not(:first-child) {
      border-left: ${config.border};
    }
  }
`

export const FooterUI = styled('div')`
  display: flex;

  ${DropdownUI}, ${ButtonFooterUI} {
    flex: 1 1 0;
  }
  ${TriggerUI} {
    width: 100%;
  }
`

export const SectionUI = styled('div')`
  & + ${FooterUI}, & + & {
    margin-top: 16px;
  }
`

export const ItemUI = styled('div')`
  padding-bottom: 2px;

  &.is-muted {
    ${ButtonUI}.is-default {
      color: ${getColor('charcoal.200')};
    }
  }
  &.is-active {
    ${ButtonUI}.is-default {
      font-weight: bold;
      color: ${getColor('blue.600')};

      ${IconUI} {
        color: ${getColor('blue.600')};
      }
    }
  }
  &.is-disabled {
    ${ButtonUI} {
      &.is-default:disabled {
        color: ${getColor('charcoal.200')} !important;
        cursor: not-allowed;
      }
    }
  }
`

export const HeaderUI = styled('div')`
  padding: 0 ${config.sidePadding};
  color: ${getColor('charcoal.500')};
  margin-bottom: 16px;

  a {
    color: ${getColor('charcoal.500')};
    text-decoration: none;

    &:hover {
      color: ${getColor('charcoal.800')};
      cursor: pointer;
    }
  }
`

export const SectionHeadingUI = styled(Heading)`
  &.is-small {
    padding: 8px ${config.sidePadding} 4px;
    color: ${getColor('grey.800')};
  }
`
