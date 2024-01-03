import React, {useState} from 'react'

const DiaryPage = React.forwardRef((props, ref) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        let itemObject = {
            title: title,
            date: date,
            text: text
        }
    }

  return (
    <div className='flex justify-center items-center w-full h-full p-4 bg-black rounded-lg' ref={ref}>
        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center h-full'>
            <div className="w-full flex justify-between items-center">
                <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Add an Item" className="border rounded p-4 h-14 w-7/12 shadow-sm"/>
                <input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="border rounded p-1 h-14 w-4/12 shadow-sm"/>
            </div>
            <textarea value={text} onChange={(event) => setText(event.target.value)} rows="2" className="p-6 mt-4 border rounded w-full shadow h-full">
            </textarea>
            <button type="submit" className="items-center p-2 text-lg border w-full rounded-lg mt-7 cursor-pointer bg-black text-white capitalize ">Save</button>
        </form>
    </div>
)
})

export default DiaryPage