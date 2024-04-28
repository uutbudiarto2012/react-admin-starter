import Icon from '@/components/Icon'
import CardContainer from '@/components/containers/CardContainer'
import { NumberInd } from '@/utils/formatter'
type TCardCounter = {
  count: number
  label: string
  icon?: string

}
const CardCounter = (props: TCardCounter) => {
  return (
    <CardContainer>
      <div className="flex items-start">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{NumberInd(props.count)}</h2>
          <p className="text-sm text-slate-800">{props.label}</p>
        </div>
        {props.icon && (
          <div className="bg-slate-800 text-slate-50 p-1.5 rounded-lg">
            <Icon name={props.icon} />
          </div>
        )}
      </div>
    </CardContainer>
  )
}

export default CardCounter