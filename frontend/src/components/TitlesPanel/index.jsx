import { MdBusinessCenter } from "react-icons/md"
import Panel from "../Panel/Panel"

const TitlesPanel = ({ titleCareers, own }) => {
  return (
    <Panel
      title={own ? "Mis Títulos" : "Títulos profesionales"}
      placeholder="¡Aún no hay títulos agregados!"
      editable={own}
    >
      {titleCareers.length > 0 && (
        <div className="flex flex-col gap-3 py-4 justify-start w-full">
          {titleCareers.map((title) => (
            <div className="flex gap-2 items-center" key={title}>
              <span className="text-violet-700">
                <MdBusinessCenter size={20} />
              </span>
              <span className="font-body text-body text-neutral-900">
                {title}
              </span>
            </div>
          ))}
        </div>
      )}
    </Panel>
  )
}

export default TitlesPanel
