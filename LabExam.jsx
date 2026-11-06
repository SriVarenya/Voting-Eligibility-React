import React from 'react';

function VotingEligibility() {
    let age = 20;

    return (
        <div>
            <h1>Voting Eligibility</h1>

            {age >= 18 ? (
                <h2>Eligible to vote</h2>
            ) : (
                <h2>Not eligible to vote</h2>
            )}
        </div>
    );
}

export default VotingEligibility;