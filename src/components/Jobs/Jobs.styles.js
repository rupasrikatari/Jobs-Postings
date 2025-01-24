// Jobs.styles.js
import styled from "styled-components";

export const JobsContainer = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 24px;
background-color: #f8f9fa;
min-height: 100vh;
display: grid;
grid-template-columns: 1fr;
gap: 24px; // Gap between job cards

@media (max-width: 1024px) {
  padding: 20px;
  gap: 20px;
}

@media (max-width: 768px) {
  padding: 16px;
  gap: 16px;
}

@media (max-width: 480px) {
  padding: 12px;
  gap: 12px;
}
`;

export const JobCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .post-date {
    color: #5f6368;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  gap: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const JobTitle = styled.h2`
  font-size: 24px;
  color: #1a73e8;
  margin: 0 0 16px 0;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;


export const CompanyIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #5f6368;
  font-size: 15px;
  font-weight: 500;

  svg {
    color: #1a73e8;
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
  color: #5f6368;
  font-size: 14px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #5f6368;
  font-weight: 500;

  svg {
    color: #1a73e8;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #5f6368;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f1f3f4;
    color: #1a73e8;
  }
`;

export const ShareMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 200px;
  z-index: 1000;

  @media (max-width: 768px) {
    right: -100%;
  }
`;

export const ShareMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  color: #3c4043;
  font-size: 14px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #f1f3f4;
  }

  svg {
    color: #5f6368;
  }
`;

export const LearnMoreButton = styled.button`
  background: #1a73e8;
  border: none;
  color: white;
  font-size: 14px;
  padding: 8px 24px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1557b0;
  }
`;

export const JobSection = styled.div`
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  color: #202124;
  margin: 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const RequirementsList = styled.ul`
  margin: 24px 0;
  padding-left: 24px;
  
  li {
    margin-bottom: 12px;
    color: #3c4043;
    font-size: 15px;
    line-height: 1.5;
    position: relative;

    &::marker {
      color: #1a73e8;
    }
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  z-index: 1000;
  border: 1px solid #e8f0fe;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background: white;
    border-right: 1px solid #e8f0fe;
    border-bottom: 1px solid #e8f0fe;
  }

  @media (max-width: 480px) {
    width: 250px;
    left: 0;
    transform: none;
  }
`;

export const TooltipTitle = styled.div`
  color: #202124;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TooltipText = styled.p`
  color: #5f6368;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const EnhancedBadge = styled.span`
  color: #1a73e8;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #e8f0fe;
  padding: 6px 12px;
  border-radius: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d3e3fd;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px 10px;
    gap: 5px;

    svg {
      width: 12px;
      height: 12px;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 4px 8px;
    gap: 4px;

    svg {
      width: 10px;
      height: 10px;
    }
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const PopupContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 24px;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 95%;
  }
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const PopupTitle = styled.h2`
  font-size: 24px;
  color: #202124;
  margin: 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #5f6368;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f1f3f4;
    color: #1a73e8;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #202124;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  font-size: 16px;
  color: #202124;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }

  &:hover {
    border-color: #1a73e8;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background: #1a73e8;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 16px;

  &:hover {
    background-color: #1557b0;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
  }
`;

export const SortButton = styled.button`
  background: #1a73e8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #1557b0;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px 16px;
  }
`;

export const JobCount = styled.div`
  color: #5f6368;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const DateBadge = styled.div`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #666;
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  
  &:before {
    content: '📅';
    margin-right: 4px;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 20px auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  color: #d32f2f;
  background-color: #ffebee;
  padding: 12px 16px;
  border-radius: 4px;
  margin: 16px 0;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '⚠️';
    margin-right: 8px;
  }
`;
export const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;

// Error state
export const ErrorState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;
export const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const CartButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0b7dda;
  }
`;
export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
  padding: 0;
  list-style: none;
`;

export const SkillChip = styled.li`
  background-color: #f0f0f0;
  color: #333;
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: default;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;