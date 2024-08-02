import { DownloadIcon, FileText } from "lucide-react"
import { Dropdown } from "../Dropdown"


interface DownloadButtonComponentProps {
	onClick: (parm:string) => void
}

const DownloadButtonComponent: React.FC<DownloadButtonComponentProps> = ({onClick}) => {
	return (
		<div className="xl:col-span-3 xl:col-start-10">
			<div className="flex gap-2 xl:justify-end">
				<Dropdown className="relative">
					<Dropdown.Trigger type="button" className="bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20 dropdown-toggle" id="export-drodown" data-bs-toggle="dropdown">
					<p>
						Export
						<DownloadIcon className="inline-block size-4 ltr:ml-3 rlt:mr-3" />
					</p>
					</Dropdown.Trigger>

					<Dropdown.Content placement="right-end" className="absolute z-50 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600 gap-4" aria-labelledby="export-drodown">
						<li className="border-t dark:border-zink-300/50 pointer" onClick={() => onClick('xlsx')}>
							<span className="export-list dropdown-item" > <FileText className="inline-block size-4 ltr:ml-1 rlt:mr-1 text-green-500"></FileText> Excel (xlsx)</span>
						</li>
						<li className="border-t dark:border-zink-300/50 pointer" onClick={() => onClick('pdf')}>
							<span className="export-list dropdown-item" > <FileText className="inline-block size-4 ltr:ml-1 rlt:mr-1 text-red-500"></FileText> PDF</span>
						</li>
					</Dropdown.Content>
				</Dropdown>
			</div>
		</div>
	)
}

export default DownloadButtonComponent
