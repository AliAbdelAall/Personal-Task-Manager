import React, {useEffect} from 'react'
import { Outlet } from "react-router-dom"

// Redux
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../core/Redux/user/useSlice'
import { setBoards } from '../../core/Redux/boards/boardsSlice'
import { setColumns } from '../../core/Redux/boards/columnSlice'
import { setTasks } from '../../core/Redux/boards/tasksSlice'
import { setTags } from '../../core/Redux/boards/tagsSlice'
import { toast } from 'react-toastify'

// Utilities
import { sendRequest } from '../../core/Utilities/remote/request'
import { requestMethods } from '../../core/Enums/requestMethods'


const Home = () => {

  const dispatcher = useDispatch()

  useEffect(()=>{
    loadMyBoards()
  },[])
  
  const loadMyBoards = () => {
    sendRequest(requestMethods.GET, '/users/get-user').then((response)=>{
      if (response.status === 200){
        
        const { username, email, boards, tags } = response.data
        const userInfo = setUserInfo({username, email,})
        dispatcher(userInfo)
        const boardslist = boards.map((board) => {
          const {columns, ...rest} = board
          return rest
        }) 
        console.log(boardslist)
        dispatcher(setBoards(boardslist))
        let columnsList = []
        let tasksList = []

        boards.forEach(board => {
          console.log(board)
          console.log(board.columns)

          const columns = board.columns?.map((column) => {
            console.log(column)
            const { tasks, ...rest} = column
            columnsList.push ({...rest, boardId: board._id})

            tasks?.map((task)=>{
              tasksList.push({boardId: board._id,columnID: column._id, task,})
            })
          })
          console.log(tasksList)
          console.log(columnsList)
          dispatcher(setColumns([...columnsList]))
          dispatcher(setTasks([...tasksList]))
        
        });
        
        let tagsList = []
        tags?.map((tag) => {tagsList.push(tag)})
        dispatcher(setTags(tagsList))
        toast.success("boards loaded")
      }
    }).catch((error)=>{
      console.error(error)
      toast.error("code error")
    })
  }

  return (
    <div className='flex Container'>

      <Outlet/>
    </div>
  )
}

export default Home 