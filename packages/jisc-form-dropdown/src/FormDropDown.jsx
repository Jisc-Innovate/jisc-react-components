// @flow

import React from "react"

type Option = {
  name: string,
  value: string,
  group: ?string,
  order: ?number
}

type Group = {
  name: string
}

type Props = {
  label: ?string,
  options: Array<Option>,
  groups: Array<Group>,
  required: ?bool,
  grouped: ?bool,
  defaultValue: ?string,
  selectedOption: string,
  onChange: ?( ) => void
}

class FormDropDown extends React.Component {
  props: Props;

  getLabel( ) {
    const { options, defaultValue, selectedOption } = this.props

    const option = options
                .filter( option => defaultValue ? option.value === defaultValue
                         : option.value === selectedOption )

    return option[ 0 ].name
  }

  renderGroupedOptions( groupName: string ) {
    const { options } = this.props

    return options
      .filter( option => option.group === groupName )
      .sort( ( a,b ) => a.order && b.order ? a.order - b.order : 1 )
      .map( option => {
        return(
          <option
            value={option.value}
            key={option.name}>

              {option.name}

          </option>
        )
      })
  }

  renderOptions( ) {
    const { options, groups, grouped } = this.props

    if( grouped ) {
      let renderedOptions = [ ]

      renderedOptions.push(
        <option
          value={options[ 0 ].value}
          key={options[ 0 ].name}>
          {options[ 0 ].name}
        </option>
      )

      groups
        .map( group => {
          const { name } = group

          renderedOptions.push(
            <optgroup
              label={name}
              key={name}>
              {
                this.renderGroupedOptions( name )
              }
            </optgroup>
          )
        })

      return renderedOptions
    }

    return options.map( ( option, i ) => {
      return(
        <option
          value={option.value}
          key={i}>

            {option.name}

        </option>
      )
    })
  }

  render( ) {
    const { label, onChange, required,
            selectedOption } = this.props,
          options = this.renderOptions( )

    return(
      <li className="form-fields__item--select">
        <label>

          <span className="form-fields__label-text">
            {label}
          </span>

          <div className="selector">
            <span>
              {this.getLabel( )}
            </span>

            <select
              value={selectedOption}
              onChange={onChange}
              required={required}>

                {options}

             </select>

           </div>
        </label>
      </li>
    )
  }
}

export default FormDropDown
