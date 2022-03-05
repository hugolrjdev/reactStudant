type TweetProps = {
    text: string;
} //deve-se criar um tipo para o props

const Tweet = (props: TweetProps) => {
    return(
        <h1>
            Tweet {props.text}
        </h1>
    );
}

export default Tweet;