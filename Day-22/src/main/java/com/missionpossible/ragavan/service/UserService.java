package com.missionpossible.ragavan.service;

import java.util.List;

import com.missionpossible.ragavan.dto.request.UserRequest;
import com.missionpossible.ragavan.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteUser(Long uid);

}
