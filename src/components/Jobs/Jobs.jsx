import React, { useState, useEffect } from 'react';
import { Share2, Bookmark, ArrowUpDown, Building2, MapPin, Link, Mail, X, Calendar, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { jobListings, levelDescriptions } from '../../data/data';
import {
  JobsContainer,
  JobCard,
  JobHeader,
  JobTitle,
  CompanyInfo,
  CompanyIcon,
  LocationInfo,
  LocationWrapper,
  RequirementsList,
  ButtonsContainer,
  IconButton,
  SaveButton,
  LearnMoreButton,
  JobSection,
  SectionTitle,
  TooltipContainer,
  TooltipContent,
  TooltipTitle,
  TooltipText,
  EnhancedBadge,
  ShareMenu,
  ShareMenuItem,
  PopupOverlay,
  PopupContent,
  PopupHeader,
  PopupTitle,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  HeaderContainer,
  HeaderControls,
  SortButton,
  JobCount,
  DateBadge,
  LoadingSpinner,
  ErrorMessage,
  CartButton
} from './Jobs.styles';

const Jobs = () => {
  const navigate = useNavigate();
  const [savedJobs, setSavedJobs] = useState(() => {
    const storedJobs = localStorage.getItem('savedJobs');
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const [sortedJobs, setSortedJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const INITIAL_DISPLAY_COUNT = 5;

  const [tooltipInfo, setTooltipInfo] = useState({
    show: false,
    level: '',
    content: ''
  });
  
  const [shareMenuState, setShareMenuState] = useState({
    isOpen: false,
    jobId: null
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    qualification: '',
    percentage: '',
    college: ''
  });

  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {
    try {
      setIsLoading(true);
      const sortedByDate = [...jobListings].sort((a, b) => {
        return new Date(b.postDate) - new Date(a.postDate);
      });
      setSortedJobs(sortedByDate);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load job listings');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setShareMenuState({ isOpen: false, jobId: null });
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSaveJob = (job, e) => {
    e.stopPropagation();
    setSavedJobs(prev => {
      const isJobSaved = prev.some(savedJob => savedJob.id === job.id);
      if (isJobSaved) {
        return prev.filter(savedJob => savedJob.id !== job.id);
      } else {
        return [...prev, job];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! This is a mock submission.');
    setIsPopupOpen(false);
    setFormData({
      name: '',
      email: '',
      qualification: '',
      percentage: '',
      college: ''
    });
  };

  const toggleJobDisplay = () => {
    setShowAllJobs(!showAllJobs);
  };

  const getDisplayedJobs = () => {
    return showAllJobs ? sortedJobs : sortedJobs.slice(0, INITIAL_DISPLAY_COUNT);
  };

  const handleMouseEnter = (level) => {
    setTooltipInfo({
      show: true,
      level,
      content: levelDescriptions[level] || `${level} level position`
    });
  };

  const handleMouseLeave = () => {
    setTooltipInfo({
      show: false,
      level: '',
      content: ''
    });
  };

  const handleShareClick = (jobId, e) => {
    e.stopPropagation();
    setShareMenuState({
      isOpen: !shareMenuState.isOpen,
      jobId
    });
  };

  const handleCopyLink = (jobId) => {
    const jobUrl = `${window.location.origin}/jobs/${jobId}`;
    navigator.clipboard.writeText(jobUrl);
    setShareMenuState({ isOpen: false, jobId: null });
  };

  const handleEmailShare = (jobId) => {
    const job = sortedJobs.find(j => j.id === jobId);
    const subject = encodeURIComponent(`Job Opportunity: ${job.title}`);
    const body = encodeURIComponent(`Check out this job opportunity at ${job.company}:\n\n${window.location.origin}/jobs/${jobId}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setShareMenuState({ isOpen: false, jobId: null });
  };

  const handleApplyClick = (jobId) => {
    setSelectedJobId(jobId);
    setIsPopupOpen(true);
  };

  const renderJobCard = (job) => {
    const postDate = new Date(job.postDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    const isJobSaved = savedJobs.some(savedJob => savedJob.id === job.id);

    return (
      <JobCard key={job.id}>
        <JobHeader>
          <div>
            <JobTitle>{job.title}</JobTitle>
            <CompanyInfo>
              <CompanyIcon>
                <Building2 size={18} />
                {job.company}
              </CompanyIcon>
              <DateBadge>
                <Calendar size={16} />
                {postDate}
              </DateBadge>
            </CompanyInfo>
            <LocationInfo>
              <LocationWrapper>
                <MapPin size={18} />
                {job.locations.join(', ')}
              </LocationWrapper>
              <TooltipContainer>
                <EnhancedBadge
                  onMouseEnter={() => handleMouseEnter(job.level)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ArrowUpDown size={16} />
                  {job.level}
                </EnhancedBadge>
                {tooltipInfo.show && tooltipInfo.level === job.level && (
                  <TooltipContent>
                    <TooltipTitle>{tooltipInfo.level}</TooltipTitle>
                    <TooltipText>{tooltipInfo.content}</TooltipText>
                  </TooltipContent>
                )}
              </TooltipContainer>
            </LocationInfo>
          </div>
          <ButtonsContainer>
            <div style={{ position: 'relative' }}>
              <IconButton
                aria-label="Share"
                onClick={(e) => handleShareClick(job.id, e)}
              >
                <Share2 size={20} />
              </IconButton>
              {shareMenuState.isOpen && shareMenuState.jobId === job.id && (
                <ShareMenu>
                  <ShareMenuItem onClick={() => handleCopyLink(job.id)}>
                    <Link size={18} />
                    Copy link
                  </ShareMenuItem>
                  <ShareMenuItem onClick={() => handleEmailShare(job.id)}>
                    <Mail size={18} />
                    Email a friend
                  </ShareMenuItem>
                </ShareMenu>
              )}
            </div>
            <SaveButton 
              aria-label="Save Job"
              onClick={(e) => handleSaveJob(job, e)}
              isSaved={isJobSaved}
            >
              <Bookmark size={20} />
            </SaveButton>
          </ButtonsContainer>
        </JobHeader>
        <RequirementsList>
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </RequirementsList>
        <LearnMoreButton onClick={() => handleApplyClick(job.id)}>
          Apply Now
        </LearnMoreButton>
      </JobCard>
    );
  };

  if (isLoading) {
    return <LoadingSpinner>Loading jobs...</LoadingSpinner>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <JobsContainer>
      <JobSection>
        <HeaderContainer>
          <SectionTitle>Available Jobs</SectionTitle>
          <HeaderControls>
            <JobCount>
              Showing {getDisplayedJobs().length} of {sortedJobs.length} jobs
            </JobCount>
            <CartButton onClick={() => navigate('/cart')}>
              <ShoppingCart size={20} />
              <span>Saved Jobs ({savedJobs.length})</span>
            </CartButton>
            <SortButton onClick={toggleJobDisplay}>
              {showAllJobs ? 'Show Recent Jobs' : 'Show All Jobs'}
            </SortButton>
          </HeaderControls>
        </HeaderContainer>
        {getDisplayedJobs().map((job) => renderJobCard(job))}
      </JobSection>

      {isPopupOpen && (
        <PopupOverlay>
          <PopupContent>
            <PopupHeader>
              <PopupTitle>Apply for Position</PopupTitle>
              <CloseButton onClick={() => setIsPopupOpen(false)}>
                <X size={24} />
              </CloseButton>
            </PopupHeader>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="qualification">Highest Qualification</Label>
                <Input
                  type="text"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Bachelor's in Computer Science"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="percentage">Qualification Percentage</Label>
                <Input
                  type="number"
                  id="percentage"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  step="0.01"
                  required
                  placeholder="Enter your percentage"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="college">College</Label>
                <Input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your college name"
                />
              </FormGroup>
              <SubmitButton type="submit">Submit Application</SubmitButton>
            </Form>
          </PopupContent>
        </PopupOverlay>
      )}
    </JobsContainer>
  );
};

export default Jobs;