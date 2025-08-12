import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding-top: 20px;
`;

export const FilterSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FilterTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primaryBlack};
`;

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.primaryBlack};
`;

export const FilterSelect = styled.select`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryYellow};
  }
`;

export const FilterInput = styled.input`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryYellow};
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const FilterButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.apply {
    background: ${({ theme }) => theme.primaryYellow};
    color: ${({ theme }) => theme.primaryBlack};
    
    &:hover {
      background: ${({ theme }) => theme.primaryLightYellow};
    }
  }
  
  &.clear {
    background: #f0f0f0;
    color: #666;
    
    &:hover {
      background: #e0e0e0;
    }
  }
`;

export const ResultsInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
`;

export const LoadMoreButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  border-radius: 12px;
  padding: 16px 48px;
  width: 232px;
  height: 60px;
  background: ${({ theme }) => theme.primaryYellow};
  margin-bottom: 32px;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryLightYellow};
  }
`;
