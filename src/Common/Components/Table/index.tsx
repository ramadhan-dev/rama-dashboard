import { Box, darken, IconButton, lighten, Typography } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import { MaterialReactTable, MRT_ToggleDensePaddingButton, MRT_ToggleFullScreenButton } from "material-react-table";
import { useSelector } from "react-redux";
import PrintIcon from '@mui/icons-material/Print';

interface ITableComponent {
	datas:any[]
	columns:any[]
	title?:string
}

const TableComponent: React.FC<ITableComponent> = ({datas, columns, title}) => {

	const selectLayoutState = (state: any) => state.Layout;
	const selectLayoutProperties = createSelector(
		selectLayoutState,
		(layout: any) => ({
			layoutModeType: layout.layoutModeType,
		})
	);

	const { layoutModeType } = useSelector(selectLayoutProperties);

	const baseBackgroundColor = layoutModeType === 'dark' ? '#132337' : 'rgba(255, 255, 255, 1)';
	const baseColor = layoutModeType === 'dark' ? '#E2EAF3' : 'rgba(100, 116, 139, 1)';

	return (
		<MaterialReactTable
			columns={columns}
			layoutMode="grid"
			data={datas}
			muiTableProps={{
				sx: {
					border: '1px solid #F1F4F7',
				},
			}}
			muiColumnActionsButtonProps={{
				sx: {
					border: layoutModeType === 'dark' ? '0 solid #E2EAF3' : '0 solid rgba(100, 116, 139, 1)',
					color: layoutModeType === 'dark' ? '#E2EAF3' : 'rgba(100, 116, 139, 1)',

				},
			}}
			muiTableHeadCellProps={{
				sx: {
					border: '1px solid #F1F4F7',
					color: layoutModeType === 'dark' ? '#E2EAF3' : 'rgba(100, 116, 139, 1)',
					'& .Mui-TableHeadCell-Content': {
						justifyContent: 'space-between',
					},
				},
			}}
			renderTopToolbarCustomActions={() => (
				<Typography variant="h5">{title}</Typography>
			)}
			muiTableBodyCellProps={{
				sx: {
					border: '1px solid #F1F4F7',
				}
			}}
			renderToolbarInternalActions={({ table }) => (
				<Box>
					<IconButton
						onClick={() => {
							window.print();
						}}
					>
						<PrintIcon sx={{ color: baseColor }} />
					</IconButton>
					<MRT_ToggleDensePaddingButton sx={{ color: baseColor }} table={table} />
					<MRT_ToggleFullScreenButton sx={{ color: baseColor }} table={table} />
				</Box>
			)}

			muiTableBodyProps={{
				sx: (theme) => ({
					'& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]) > td':
					{
						color: darken(baseColor, 0.1),
					},
					'& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
					{
						color: darken(baseColor, 0.2),
					},
					'& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]) > td':
					{
						color: lighten(baseColor, 0.1),
					},
					'& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
					{
						color: darken(baseColor, 0.2),
					},
				}),
			}}
			mrtTheme={(theme) => ({
				baseBackgroundColor: baseBackgroundColor,
			})}
		/>
	)
}

export default TableComponent
