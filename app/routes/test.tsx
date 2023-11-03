import Component, {
    frontmatter
} from "../content/blah.mdx";

export default function Test() {
    return (
    <>
    <h1>frontmatter.title: {frontmatter.title}</h1>
    <Component />
    </>
    )
}