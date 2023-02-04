import React from 'react'
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import Sidebar from '../Sidebar';
import cursor from '../../../assets/images/cursor.png';
import CourseModal from './CourseModal';

const Users = () => {
  const courses =[{
    _id:"asassadadffdsfa",
   title:'React Course',
    category:'Web development',
    poster:{
      url:"https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q="
    },
   createdBy:'6 Pack Programmer',
   views:123,
   numOfVideos:12,
  },
];
const {isOpen,onClose,onOpen} = useDisclosure();
  const courseDetailHandler = userId =>{
    onOpen();
  };
  const deleteButtonHandler = userId =>{
    console.log(userId);
  }

  const deleteLectureButtonHandler = (courseId,lectureId)=>{
       console.log(courseId);
       console.log(lectureId);
  }

  const addLectureHandler = (e,courseid,title,description,video)=>{
    e.preventDefault();
  }
  return (
    <Grid css={{cursor:`url(${cursor}),default`}}
    minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Box p={['0', '8']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my="16"
          textAlign={['center', 'left']}
        />
          <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
          <TableCaption>All available courses in the database</TableCaption>
          <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item=>(
                <Row  
                courseDetailHandler={courseDetailHandler}
                deleteButtonHandler={deleteButtonHandler}
                key={item._id}
                item={item}/>
              ))}
            </Tbody>
          </Table>
          </TableContainer>
          <CourseModal 
          isOpen={isOpen} 
          onClose={onClose} 
          id={"qwertttg"} 
          courseTitle="React Course" 
          deleteButtonHandler={deleteLectureButtonHandler} 
          addLectureHandler={addLectureHandler}/>
        </Box>
        <Sidebar/>
    </Grid>
  )
}

export default Users

function Row({ item, courseDetailHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url}/>
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td >{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            View Lectures
          </Button>

          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
