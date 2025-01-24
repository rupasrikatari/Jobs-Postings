import styled from 'styled-components';

export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const CartTitle = styled.h1`
  font-size: 24px;
  color: #202124;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const JobCount = styled.span`
  color: #5f6368;
  margin-left: 8px;
`;

export const HeaderControls = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const SavedJobCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const JobTitle = styled.h2`
  font-size: 20px;
  color: #1a73e8;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #5f6368;
  margin: 8px 0;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const LocationInfo = styled.div`
  color: #5f6368;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const JobDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 24px 0;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const JobInfoItem = styled.div`
  h3 {
    font-size: 14px;
    color: #5f6368;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 16px;
    color: #202124;
    margin: 0;
  }
`;

export const DateBadge = styled.span`
  background: #e8f0fe;
  color: #1a73e8;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export const ApplyButton = styled.button`
  background: #1a73e8;
  color: white;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #1557b0;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #5f6368;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #d93025;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #5f6368;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;

  &:hover {
    color: #202124;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 48px;
  color: #5f6368;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;