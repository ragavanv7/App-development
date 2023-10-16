package com.missionpossible.ragavan.service;

import com.missionpossible.ragavan.dto.request.AuthenticationRequest;
import com.missionpossible.ragavan.dto.request.RegisterRequest;
import com.missionpossible.ragavan.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
