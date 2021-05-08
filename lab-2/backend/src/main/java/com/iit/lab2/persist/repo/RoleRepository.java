package com.iit.lab2.persist.repo;

import com.iit.lab2.persist.entity.user.Role;
import com.iit.lab2.persist.entity.user.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
