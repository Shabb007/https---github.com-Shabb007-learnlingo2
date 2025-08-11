import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTeachersAsync } from "../../redux/teachers/operations";
import {
  selectError,
  selectIsLoading,
  selectTeachers,
} from "../../redux/selectors";
import { Loader } from "../../components/Loader/Loader";
import CardList from "../../components/CardList/CardList";

import { Container, LoadMoreButton } from "./Teachers.styled";

const Teachers = ({ authUser }) => {
  const dispatch = useDispatch();
  const teacherList = useSelector(selectTeachers);
  const loadingState = useSelector(selectIsLoading);
  const errorState = useSelector(selectError);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  console.log("Teachers component state:", {
    teacherListLength: teacherList.length,
    loadingState,
    errorState,
    visibleTeachers
  });

  const loadMoreTeachers = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  useEffect(() => {
    dispatch(fetchTeachersAsync());
  }, [dispatch]);

  return (
    <Container>
      {loadingState && !errorState && teacherList.length === 0 && <Loader />}
      {teacherList.length > 0 && (
        <CardList
          authUser={authUser}
          teachers={teacherList.slice(0, visibleTeachers)}
        />
      )}
      {teacherList.length > visibleTeachers && (
        <LoadMoreButton onClick={loadMoreTeachers}>Load More</LoadMoreButton>
      )}
    </Container>
  );
};
export default Teachers;
