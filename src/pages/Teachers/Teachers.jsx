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

import {
  Container,
  LoadMoreButton,
  FilterSection,
  FilterTitle,
  FilterGrid,
  FilterGroup,
  FilterLabel,
  FilterSelect,
  FilterInput,
  FilterButtons,
  FilterButton,
  ResultsInfo,
} from "./Teachers.styled";

const Teachers = ({ authUser }) => {
  const dispatch = useDispatch();
  const teacherList = useSelector(selectTeachers);
  const loadingState = useSelector(selectIsLoading);
  const errorState = useSelector(selectError);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  
  // Filter state
  const [filters, setFilters] = useState({
    language: "",
    level: "",
    priceMin: "",
    priceMax: "",
  });
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  // Debug logs
  console.log("teacherList:", teacherList);
  console.log("teacherList.length:", teacherList?.length);
  console.log("visibleTeachers:", visibleTeachers);
  console.log("Should show Load More:", teacherList?.length > visibleTeachers);
  console.log("loadingState:", loadingState);
  console.log("errorState:", errorState);

  // Get unique languages and levels from teachers
  const getUniqueLanguages = () => {
    if (!teacherList) return [];
    const languages = teacherList.flatMap(teacher => teacher.languages || []);
    return [...new Set(languages)].sort();
  };

  const getUniqueLevels = () => {
    if (!teacherList) return [];
    const levels = teacherList.flatMap(teacher => teacher.levels || []);
    return [...new Set(levels)].sort();
  };

  // Apply filters
  const applyFilters = () => {
    if (!teacherList) return;
    
    let filtered = teacherList.filter(teacher => {
      // Language filter
      if (filters.language && !teacher.languages?.includes(filters.language)) {
        return false;
      }
      
      // Level filter
      if (filters.level && !teacher.levels?.includes(filters.level)) {
        return false;
      }
      
      // Price range filter
      if (filters.priceMin && teacher.price_per_hour < parseFloat(filters.priceMin)) {
        return false;
      }
      if (filters.priceMax && teacher.price_per_hour > parseFloat(filters.priceMax)) {
        return false;
      }
      
      return true;
    });
    
    setFilteredTeachers(filtered);
    setIsFiltered(true);
    setVisibleTeachers(4); // Reset visible teachers when filtering
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({
      language: "",
      level: "",
      priceMin: "",
      priceMax: "",
    });
    setFilteredTeachers([]);
    setIsFiltered(false);
    setVisibleTeachers(4);
  };

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const loadMoreTeachers = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  useEffect(() => {
    dispatch(fetchTeachersAsync());
  }, [dispatch]);

  // Get the current list of teachers to display
  const currentTeachers = isFiltered ? filteredTeachers : teacherList;

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
          {/* Filter Section */}
          <FilterSection>
            <FilterTitle>Filter Teachers</FilterTitle>
            <FilterGrid>
              <FilterGroup>
                <FilterLabel>Language</FilterLabel>
                <FilterSelect
                  value={filters.language}
                  onChange={(e) => handleFilterChange('language', e.target.value)}
                >
                  <option value="">All Languages</option>
                  {getUniqueLanguages().map(language => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </FilterSelect>
              </FilterGroup>
              
              <FilterGroup>
                <FilterLabel>Level</FilterLabel>
                <FilterSelect
                  value={filters.level}
                  onChange={(e) => handleFilterChange('level', e.target.value)}
                >
                  <option value="">All Levels</option>
                  {getUniqueLevels().map(level => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </FilterSelect>
              </FilterGroup>
              
              <FilterGroup>
                <FilterLabel>Min Price ($/hour)</FilterLabel>
                <FilterInput
                  type="number"
                  placeholder="Min price"
                  value={filters.priceMin}
                  onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                />
              </FilterGroup>
              
              <FilterGroup>
                <FilterLabel>Max Price ($/hour)</FilterLabel>
                <FilterInput
                  type="number"
                  placeholder="Max price"
                  value={filters.priceMax}
                  onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                />
              </FilterGroup>
            </FilterGrid>
            
            <FilterButtons>
              <FilterButton className="apply" onClick={applyFilters}>
                Apply Filters
              </FilterButton>
              <FilterButton className="clear" onClick={clearFilters}>
                Clear Filters
              </FilterButton>
            </FilterButtons>
          </FilterSection>

          {/* Results Info */}
          {currentTeachers && (
            <ResultsInfo>
              Showing {Math.min(visibleTeachers, currentTeachers.length)} of {currentTeachers.length} teachers
              {isFiltered && ` (filtered from ${teacherList.length} total)`}
            </ResultsInfo>
          )}

          {/* Teachers List */}
          <CardList
            authUser={authUser}
            teachers={currentTeachers?.slice(0, visibleTeachers) || []}
          />
          
          {/* Load More Button */}
          {currentTeachers && currentTeachers.length > visibleTeachers && (
            <LoadMoreButton onClick={loadMoreTeachers}>Load More</LoadMoreButton>
          )}
        </>
      )}
      {!loadingState && !errorState && (!teacherList || teacherList.length === 0) && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          No teachers found. Please check the console for more information.
        </div>
      )}
      {!loadingState && !errorState && isFiltered && currentTeachers && currentTeachers.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          No teachers match your current filters. Try adjusting your search criteria.
        </div>
      )}
    </Container>
  );
};
export default Teachers;
