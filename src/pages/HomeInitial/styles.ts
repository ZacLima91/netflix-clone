import styled from "styled-components";

export const HomeComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/f07b57b2-2932-42ad-adda-058c4499f034/BR-pt-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  background-size: cover;

  .card-background {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .container-card {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .card-story-text {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
    text-align: center;
  }

  .email-form-creating {
    display: flex;
  }

  .email-form-creating input {
    padding: 1rem;
    width: 25rem;
    font-size: 5rem 1rem;
    font-weight: 600;
  }

  .email-form-creating button {
    width: 9rem;
    background-color: red;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .email-form-creating label {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .email-form-creating label span {
    position: absolute;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.7rem;
    font-weight: 600;
    top: 5px;
    left: 10px;
  }

  hr {
    border: none;
    border-top: 6px solid #333;
    margin: 10px 0;
  }
`;
