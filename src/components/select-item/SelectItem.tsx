import cl from './SelectItem.module.css'

export function SelectItem({props, title,  onChange}: any) {
  return (
    <div className={cl.container}>
      <label className={cl.label}>{title}</label>
      <select
        onChange={e => onChange(e.target.value)}
      >
        <option value='All'>All</option>
        {props.map((item: any) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>    
  )
}
