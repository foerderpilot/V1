import '../App.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BlogPostCard from '../components/BlogPostCard';
import blogPosts from '../data/BlogData'; // Make sure this path is correct

export default function Blog() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-auto p-4" style={{ maxHeight: '100vh' }}>
                {blogPosts.map(post => (
                    <BlogPostCard key={post.id} image={post.image} title={post.title} description={post.description} />
                ))}
            </div>
            <Footer />
        </div>
    );
}
