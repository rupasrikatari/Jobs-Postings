import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { X, Building2, MapPin, Calendar, List } from "lucide-react"
import {
  CartContainer,
  CartHeader,
  CartTitle,
  EmptyCartMessage,
  SavedJobCard,
  JobHeader,
  JobTitle,
  RemoveButton,
  ApplyButton,
  HeaderControls,
  BackButton,
  JobCount,
  JobDetails,
  JobInfoItem,
  DateBadge,
} from "./Cart.styles"

import {
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
} from "../Jobs/Jobs.styles"

const Cart = () => {
  const navigate = useNavigate()
  
  const [savedJobs, setSavedJobs] = useState(() => {
    const storedJobs = localStorage.getItem("savedJobs")
    return storedJobs ? JSON.parse(storedJobs) : []
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    percentage: "",
    college: "",
  })

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs))
  }, [savedJobs])

  const removeFromCart = (jobId) => {
    const updatedSavedJobs = savedJobs.filter((job) => job.id !== jobId)
    setSavedJobs(updatedSavedJobs)
  }

  const handleApplyClick = (job) => {
    setSelectedJob(job)
    setIsPopupOpen(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Your application for ${selectedJob.jobTitle} has been submitted successfully!`)
    setIsPopupOpen(false)
    setFormData({
      name: "",
      email: "",
      qualification: "",
      percentage: "",
      college: "",
    })
    setSelectedJob(null)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setSelectedJob(null)
  }

  if (!savedJobs || savedJobs.length === 0) {
    return (
      <CartContainer>
        <CartHeader>
          <CartTitle>Saved Jobs</CartTitle>
          <BackButton onClick={() => navigate("/jobs")}>Back to Jobs</BackButton>
        </CartHeader>
        <EmptyCartMessage>No jobs saved yet</EmptyCartMessage>
      </CartContainer>
    )
  }

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Saved Jobs</CartTitle>
        <HeaderControls>
          <JobCount>
            {savedJobs.length} saved job{savedJobs.length !== 1 ? "s" : ""}
          </JobCount>
          <BackButton onClick={() => navigate("/jobs")}>Back to Jobs</BackButton>
        </HeaderControls>
      </CartHeader>

      {savedJobs.map((job) => {
        const postDate = job.postDate 
          ? new Date(job.postDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }) 
          : "Date Not Available"

        return (
          <SavedJobCard key={job.id}>
            <JobHeader>
              <JobDetails>
                <JobTitle>{job.jobTitle}</JobTitle>
                <JobInfoItem>
                  <Building2 size={18} />
                  <span>{job.company}</span>
                </JobInfoItem>
                <JobInfoItem>
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </JobInfoItem>
                <JobInfoItem>
                  <Calendar size={16} />
                  <DateBadge>{postDate}</DateBadge>
                </JobInfoItem>
                <JobInfoItem>
                  <List size={16} />
                  <span>{job.experience} Experience</span>
                </JobInfoItem>
              </JobDetails>
              <RemoveButton onClick={() => removeFromCart(job.id)} aria-label="Remove job">
                <X size={20} />
              </RemoveButton>
            </JobHeader>
            <div style={{ padding: '10px 15px' }}>
              <strong>Skills Required:</strong>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '5px', 
                marginTop: '5px' 
              }}>
                {job.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    style={{
                      backgroundColor: '#f0f0f0', 
                      padding: '3px 8px', 
                      borderRadius: '15px', 
                      fontSize: '0.8em'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ 
              padding: '10px 15px', 
              maxHeight: '150px', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis' 
            }}>
              <strong>Job Description:</strong>
              <p>{job.description}</p>
            </div>
            <ApplyButton onClick={() => handleApplyClick(job)}>Apply Now</ApplyButton>
          </SavedJobCard>
        )
      })}

      {isPopupOpen && selectedJob && (
        <PopupOverlay>
          <PopupContent>
            <PopupHeader>
              <PopupTitle>Apply for {selectedJob.jobTitle}</PopupTitle>
              <CloseButton onClick={handleClosePopup}>
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
    </CartContainer>
  )
}

export default Cart