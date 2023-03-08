import React, { useState,useEffect } from 'react';
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/course";
import toast from "react-hot-toast";
import { addToPlaylist } from '../../redux/actions/profle';
import { loadUser } from '../../redux/actions/user';
//different courses ko render krne k liye course component yha define kra gya
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading
}) => {
  
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAling={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          children={'creator'}
          textTransform="uppercase"
        />
        <Text
          children={creator}
          textTransform="uppercase"
          fontFamily={'body'}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        textTransform="uppercase"
        children={`Lectures - ${lectureCount}`}
      />
      <Heading
        textTransform="uppercase"
        size="xs"
        children={`Views-${views}`}
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/courses/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

// Main component yha hai
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const addToPlaylistHandler = async (couseId) => {

     await dispatch(addToPlaylist(couseId));
     dispatch(loadUser());
  };
  //course ki jitni category hai usk liye array banaya gya
  const categories = [
    'Web development',
    'Artificial Intellegene',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];
 
  const {loading,courses,error,message} = useSelector(state=>state.course);
  useEffect(()=>{
  dispatch(getAllCourses(category,keyword));
  if(error){
    toast.error(error);
    dispatch({type:"clearError"});
  }
  if(message){
    toast.success(message);
    dispatch({type:"clearMessage"})
  }
  },[category,keyword,dispatch,error,message])
  return (
    //yha course page k liye ek container decide kra gya
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      {/* yha search bar banayaa gya course search krne k liye */}
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor="yellow.500"
      />

      {/* yha different category k course ki heding show kr rakhe hai     */}
      <HStack
        overflow={'auto'}
        paddingY="8"
        justifyContent={['space-evenly', 'center']}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      {/* yha course component define kra gya hai jisme se props send krenge      */}
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ?
          courses && courses.map(item=>(
            <Course
            key={item._id}
          title={item.title}
          description={item.description}
          views={item.views}
          imageSrc={
            item.poster.url
          }
          id={item._id}
          creator={item.createdBy}
          lectureCount={item.numOfVideos}
           addToPlaylistHandler={addToPlaylistHandler}
           loading={loading}
        />
          )):<Heading opacity={0.5} mt="4" children="Courses not found"/>
        }
        
        
      </Stack>
    </Container>
  );
};

export default Courses;

