package com.missionpossible.ragavan.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_service")
public class Contact {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sid;

	@Column(length = 50, nullable = false)
    private String service_name;
    

    @Column(length = 50, nullable = false)
    private String service_description;
    

    @Column(length = 50, nullable = false)
    private String service_type;
    

    @Column(length = 50, nullable = false)
    private String service_owner;
    

    @Column(length = 50, nullable = false)
    private String service_status;
    

    @Column(length = 50, nullable = false)
    private String service_cost;
    

    @Column(length = 50, nullable = false)
    private String service_duration;
    

    @Column(length = 50, nullable = false)
    private String service_available;
	
}