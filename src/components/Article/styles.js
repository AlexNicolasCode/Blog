import styled from "styled-components";

export const ArticleComponent = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    height: 160px;
    background-image: linear-gradient(180deg, var(--dark-gray-color), var(--dark-color));
    border: 1px solid var(--white-color);
    color: var(--gray-color);

    &:first-child {
        margin-top: 24px;
    }

    &:not(:first-child) {
        margin-top: 16px;
    }

    .published_at {
        display: block;
        font-size: 8px;
        width: 100%;
        text-align: right;
    }

    .title {
        color: var(--white-color);
        font-size: 20px;
        text-align: center;
    }

    .description {
        font-size: 12px;
        text-align: justify;
    }

    .tags::before {
        content: "|";
        height: 10px;
        width: 10px;
        font-size: 9px;
        background-color: var(--css-color);
        color: var(--css-color);
        margin-right: 4px;
    }

    .tags {
        font-size: 6px;
        color: var(--white-color);
    }

    @media only screen and (min-width: 900px) {
        height: 200px;
        width: 320px;
    
        &:first-child {
            margin-top: 0;
        }

        &:not(:first-child) {
            margin-top: 0;
        }
    }
`