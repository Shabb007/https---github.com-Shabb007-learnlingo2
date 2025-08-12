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

  // Debug logs
  console.log("teacherList:", teacherList);
  console.log("teacherList.length:", teacherList?.length);
  console.log("visibleTeachers:", visibleTeachers);
  console.log("Should show Load More:", teacherList?.length > visibleTeachers);
  console.log("loadingState:", loadingState);
  console.log("errorState:", errorState);

  const loadMoreTeachers = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  useEffect(() => {
    dispatch(fetchTeachersAsync());
  }, [dispatch]);

  return (
    <Container>
      {loadingState && <Loader />}
      {errorState && (
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
          Error loading teachers: {errorState}
        </div>
      )}
      {!loadingState && !errorState && teacherList && teacherList.length > 0 && (
        <>
          <CardList
            authUser={authUser}
            teachers={teacherList?.slice(0, visibleTeachers) || []}
          />
          {teacherList && teacherList.length > visibleTeachers && (
            <LoadMoreButton onClick={loadMoreTeachers}>Load More</LoadMoreButton>
          )}
        </>
      )}
      {!loadingState && !errorState && (!teacherList || teacherList.length === 0) && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          No teachers found. Please check the console for more information.
        </div>
      )}
    </Container>
  );
};
export default Teachers;
