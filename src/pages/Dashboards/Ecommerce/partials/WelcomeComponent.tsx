import React from 'react'
import Alert from '#/Common/Components/Alert';

function WelcomeComponent() {
  return (
    <React.Fragment>
			<div className="grid grid-cols-12 gap-x-5 my-2">
				<Alert className="relative p-3 pr-12 text-sm border border-transparent rounded-md text-zink-100 bg-zink-800 dark:bg-custom-400/20 col-span-12">
					<Alert.Close className="absolute top-0 bottom-0 right-0 p-3 transition text-red-700 hover:text-custom-500 dark:text-custom-500 dark:hover:text-custom-500" />
					<Alert.Bold className="font-bold">Welcome Fikri Ramadhan</Alert.Bold>
					<Alert.Content>An ecommerce dashboard has just that purpose. <br />It provides your ecommerce team with a clear overview of key financial and website KPIs at any time.</Alert.Content>
				</Alert>
			</div>
    </React.Fragment>
  )
}

export default WelcomeComponent
