import React from 'react'; // we need this to make JSX compile

type InputProps = {
    labelName: string,
    containerClass: string
    values: Array<string>
}

export const FormRadio = ({ labelName, values, containerClass }: InputProps) => <>
    <div className={containerClass}>
        <label htmlFor="text" className="text-gray-700 text-sm font-normal font-['Poppins']">{labelName}</label>
        <div className=" sm:flex sm:flex-row sm:justify-between ">
            <div className="flex items-center pl-4 border border-gray-200 rounded bg-white dark:border-gray-700 w-full sm:mr-4 h-10">
                <input id="bordered-radio-1" type="radio" value={values[0]} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{values[0]}</label>
            </div>
            <div className="flex items-center pl-4 border border-gray-200 rounded bg-white dark:border-gray-700 w-full sm:ml-4 h-10">
                <input checked id="bordered-radio-2" type="radio" value={values[1]} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{values[1]}</label>
            </div>
            <div className="flex items-center pl-4 border border-gray-200 rounded bg-white dark:border-gray-700 w-full sm:ml-4 h-10">
                <input checked id="bordered-radio-2" type="radio" value={values[2]} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{values[2]}</label>
            </div>
        </div>
    </div>
</>