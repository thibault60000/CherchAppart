<?php

namespace CherchAppartBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;

/**
 * User
 */
class User extends BaseUser
{
    /**
     * @var int
     */
    protected $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $lastname;

    /**
     * @var string
     */
    private $sexe;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return User
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set lastname
     *
     * @param string $lastname
     *
     * @return User
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Get lastname
     *
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Set sexe
     *
     * @param string $sexe
     *
     * @return User
     */
    public function setSexe($sexe)
    {
        $this->sexe = $sexe;

        return $this;
    }

    /**
     * Get sexe
     *
     * @return string
     */
    public function getSexe()
    {
        return $this->sexe;
    }
    /**
     * @var string
     */
    private $adress;

    /**
     * @var string
     */
    private $postal_code;

    /**
     * @var string
     */
    private $city;

    /**
     * @var string
     */
    private $phone_number;


    /**
     * Set adress
     *
     * @param string $adress
     *
     * @return User
     */
    public function setAdress($adress)
    {
        $this->adress = $adress;

        return $this;
    }

    /**
     * Get adress
     *
     * @return string
     */
    public function getAdress()
    {
        return $this->adress;
    }

    /**
     * Set postalCode
     *
     * @param string $postalCode
     *
     * @return User
     */
    public function setPostalCode($postalCode)
    {
        $this->postal_code = $postalCode;

        return $this;
    }

    /**
     * Get postalCode
     *
     * @return string
     */
    public function getPostalCode()
    {
        return $this->postal_code;
    }

    /**
     * Set city
     *
     * @param string $city
     *
     * @return User
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set phoneNumber
     *
     * @param string $phoneNumber
     *
     * @return User
     */
    public function setPhoneNumber($phoneNumber)
    {
        $this->phone_number = $phoneNumber;

        return $this;
    }

    /**
     * Get phoneNumber
     *
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->phone_number;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $announce;


    /**
     * Add announce
     *
     * @param \CherchAppartBundle\Entity\Announce $announce
     *
     * @return User
     */
    public function addAnnounce(\CherchAppartBundle\Entity\Announce $announce)
    {
        $this->announce[] = $announce;

        return $this;
    }

    /**
     * Remove announce
     *
     * @param \CherchAppartBundle\Entity\Announce $announce
     */
    public function removeAnnounce(\CherchAppartBundle\Entity\Announce $announce)
    {
        $this->announce->removeElement($announce);
    }

    /**
     * Get announce
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAnnounce()
    {
        return $this->announce;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $announce_comments;


    /**
     * Add announceComment
     *
     * @param \CherchAppartBundle\Entity\Announce_Comments $announceComment
     *
     * @return User
     */
    public function addAnnounceComment(\CherchAppartBundle\Entity\Announce_Comments $announceComment)
    {
        $this->announce_comments[] = $announceComment;

        return $this;
    }

    /**
     * Remove announceComment
     *
     * @param \CherchAppartBundle\Entity\Announce_Comments $announceComment
     */
    public function removeAnnounceComment(\CherchAppartBundle\Entity\Announce_Comments $announceComment)
    {
        $this->announce_comments->removeElement($announceComment);
    }

    /**
     * Get announceComments
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAnnounceComments()
    {
        return $this->announce_comments;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $comments_like;


    /**
     * Add commentsLike
     *
     * @param \CherchAppartBundle\Entity\Comments_like $commentsLike
     *
     * @return User
     */
    public function addCommentsLike(\CherchAppartBundle\Entity\Comments_Like $commentsLike)
    {
        $this->comments_like[] = $commentsLike;

        return $this;
    }

    /**
     * Remove commentsLike
     *
     * @param \CherchAppartBundle\Entity\Comments_like $commentsLike
     */
    public function removeCommentsLike(\CherchAppartBundle\Entity\Comments_Like $commentsLike)
    {
        $this->comments_like->removeElement($commentsLike);
    }

    /**
     * Get commentsLike
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCommentsLike()
    {
        return $this->comments_like;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $announce_fire;


    /**
     * Add announceFire
     *
     * @param \CherchAppartBundle\Entity\Announce_Fire $announceFire
     *
     * @return User
     */
    public function addAnnounceFire(\CherchAppartBundle\Entity\Announce_Fire $announceFire)
    {
        $this->announce_fire[] = $announceFire;

        return $this;
    }

    /**
     * Remove announceFire
     *
     * @param \CherchAppartBundle\Entity\Announce_Fire $announceFire
     */
    public function removeAnnounceFire(\CherchAppartBundle\Entity\Announce_Fire $announceFire)
    {
        $this->announce_fire->removeElement($announceFire);
    }

    /**
     * Get announceFire
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAnnounceFire()
    {
        return $this->announce_fire;
    }
}
