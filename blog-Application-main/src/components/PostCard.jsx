import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const PostCard = () => {
    return (
        <div className="container mt-5">
            {/* Header Section */}
            <header className="text-center mb-5">
                <h1 className="display-3 font-weight-bold">
                    How Journaling for 10 Minutes a Day Can Transform Your Mental Health
                </h1>
                <p className="lead text-muted">
                    By <strong>Wholistique</strong> | January 10, 2025
                </p>
                <hr />
            </header>

            {/* Main Content Section */}
            <article>
                <section className="mb-4">
                    <p className="lead">
                        Journaling is a simple yet powerful way to improve your mental health. By spending just 10 minutes a day putting pen to paper, you can experience profound benefits that enhance your emotional well-being and clarity of mind.
                    </p>
                    <img
                        src="https://via.placeholder.com/1200x600"
                        alt="Journaling"
                        className="img-fluid rounded shadow mb-4"
                    />
                    <p>
                        It’s not about writing long essays. It’s about getting your thoughts out of your head and onto paper. The process of journaling helps you reflect, understand your emotions, and gain insight into what’s going on in your life. Over time, it becomes a powerful tool for self-discovery and growth.
                    </p>
                </section>

                <section className="mb-4">
                    <h3 className="h4 font-weight-bold">Why Journaling Works</h3>
                    <p>
                        Writing about your feelings can help process and release emotions, ultimately improving your mental state. Research shows that expressive writing can reduce stress, anxiety, and even depression.
                    </p>
                    <ul className="list-group">
                        <li className="list-group-item">Enhances self-awareness</li>
                        <li className="list-group-item">Relieves stress and anxiety</li>
                        <li className="list-group-item">Promotes mindfulness</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="h4 font-weight-bold">How to st Journaling</h3>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item">Set aside 10 minutes each day, preferably in the morning.</li>
                        <li className="list-group-item">Write about whatever comes to your mind – don’t censor yourself.</li>
                        <li className="list-group-item">Focus on your thoughts, emotions, and what you’re grateful for.</li>
                    </ol>
                    <p>
                        With consistent practice, journaling becomes an invaluable tool for maintaining your mental health and finding peace in the chaos of daily life.
                    </p>
                </section>

                <section className="mb-4">
                    <h3 className="h4 font-weight-bold">Conclusion</h3>
                    <p>
                        Journaling doesn’t have to be complicated. It’s a simple, effective way to boost your mental health, and by spending just 10 minutes a day, you’ll likely begin to see profound changes in your emotional well-being.
                    </p>
                </section>
            </article>

            {/* Footer Section */}
            <footer className="text-center mt-5 py-3">
                <p className="text-muted">© 2025 Wholistique. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default PostCard;
