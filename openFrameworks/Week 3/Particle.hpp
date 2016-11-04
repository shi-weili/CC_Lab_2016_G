//
//  Particle.hpp
//  FirstParticleSystem
//
//  Created by Weili Shi on 11/3/16.
//
//

#ifndef Particle_hpp
#define Particle_hpp

#include <stdio.h>

#include "ofMain.h"

class Particle {
public:
    
    Particle(ofVec2f pos);
    
    void resetForces();
    void applyForce(ofVec2f force);
    void update(float multiplier);
    void draw();
    
    ofVec2f mPosition, mVelocity, mAcceleration;
    float mLifeSpan;
    const float INITIAL_LIFE_SPAN = 120.0f; // in frames
    const float BLINKING_LIFE_SPAN = 60.0f;
    
};





#endif /* Particle_hpp */
